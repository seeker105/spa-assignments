'use strict'

$(document).ready(() => {

    let total = 0;
    let autoclickerCount = 0;
    let addend = 1;
    const multiplier = 1.2;
    let intervals = [];
    let multiplierButtonJq = $("#mul_button")
    let totalSpanJq = $("#total");
    let addendSpanJq = $("#addend");
    let addendButtonJq = $("#add_button");
    let autoclickerCountSpanJq = $("#autoclicker_count");
    let autoclickButtonJq = $("#auto_click_button");
    let resetButtonJq = $("#reset_button");
    let multiplier_active = false;
    let autoclicker_active = false;

    const updatePage = () => {
        if (total >= 10) {
            multiplierButtonJq.removeClass("inactive");
            multiplier_active = true;
        } else {
            multiplierButtonJq.addClass("inactive")
            multiplier_active = false;
        }
        if (total >= 100) {
            autoclickButtonJq.removeClass("inactive");
            autoclicker_active = true;
        } else  {
            autoclickButtonJq.addClass("inactive")
            autoclicker_active = false;
        }
        if (total > 0 || addend > 1 || autoclickerCount > 0){
            resetButtonJq.prop('disabled', false);
        } else {
            resetButtonJq.prop('disabled', true);
        }
        totalSpanJq.html("Total: " + total.toFixed(2));
        addendSpanJq.html(addend.toFixed(2));
        autoclickerCountSpanJq.html(autoclickerCount);
    }
    
    const save = () => {
        localStorage.setItem("total", total.toString());
        localStorage.setItem("autoclickerCount", autoclickerCount.toString());
        localStorage.setItem("addend", addend.toString());
    }
    
    const load = () => {
        if (localStorage.getItem("total")){
            total = parseFloat(localStorage.getItem("total"))
        } else {
            total = 0;
        }

        if (localStorage.getItem("autoclickerCount")){
            autoclickerCount = parseInt(localStorage.getItem("autoclickerCount"))
        } else {
            autoclickerCount = 0;
        }

        if (localStorage.getItem("addend")){
            addend = parseFloat(localStorage.getItem("addend"))
        } else {
            addend = 1;
        }
        intervals = [];
        updatePage();
        if (autoclickerCount > 0){
            for (let y = 0; y < autoclickerCount; y++){
                intervals.push(setInterval(addAddend, 1000));
            }
        }
    }
    
    const addAddend = () => {
        total = total + addend;
        // totalSpanJq.html("Total: " + total.toFixed(2));
        console.log(total)
        updatePage();
        save();
    }
    
    const subtractCost = (cost) => {
        total = total - cost;
        // totalSpanJq.html("Total: " + total.toFixed(2));
        updatePage();
        save();
    }
    
    const startAutoclicker = () => {
        autoclickerCount = autoclickerCount + 1;
        // autoclickerCountSpanJq.html("Total: " + autoclickerCount);
        intervals.push(setInterval(addAddend, 1000));
        updatePage();
        save();
    }
    
    const reset = () => {
        for (let x = 0; x < intervals.length; x++) {
            clearInterval(intervals[x]);
        }
        resetButtonJq.prop('disabled', true)
        total = 0;
        addend = 1;
        autoclickerCount = 0;
        localStorage.clear();
        updatePage();
    }
    
    addendButtonJq.click((event) => {
        addAddend();
    })
    
    multiplierButtonJq.click((event) => {
        if (multiplierButtonJq.is(".inactive")) {
            return;
        }
        addend = addend * multiplier;
        // addendSpanJq.html(addend.toFixed(2));
        subtractCost(10);
    })
    
    autoclickButtonJq.click((event) => {
        if (autoclickButtonJq.is(".inactive")) {
            return;
        }
        subtractCost(100);
        startAutoclicker();
    })
    
    
    resetButtonJq.click((event) => {
        reset();
    })
    
    load();
    
    
    
    
})