var tabOne = document.getElementById("tab1");
var tabTwo = document.getElementById("tab2");
var tabThree = document.getElementById("tab3");
var tabFour = document.getElementById("tab4");

var listOne = document.getElementById("list1");
var listTwo = document.getElementById("list2");
var listThree = document.getElementById("list3");
var listFour = document.getElementById("list4");

function dataChange() {
    tabOne.classList.add("tab-active");
    tabOne.classList.remove("tab-hidden");
    listOne.classList.add("active");
    listOne.classList.remove("hidden");

    tabTwo.classList.remove("tab-active");
    tabTwo.classList.add("tab-hidden");
    listTwo.classList.remove("active");
    listTwo.classList.add("hidden");

    tabThree.classList.remove("tab-active");
    tabThree.classList.add("tab-hidden");
    listThree.classList.remove("active");
    listThree.classList.add("hidden");

    tabFour.classList.remove("tab-active");
    tabFour.classList.add("tab-hidden");
    listFour.classList.remove("active");
    listFour.classList.add("hidden");

}

function dataChangeTwo() {
    tabOne.classList.remove("tab-active");
    tabOne.classList.add("tab-hidden");
    listOne.classList.remove("active");
    listOne.classList.add("hidden");

    tabTwo.classList.add("tab-active");
    tabTwo.classList.remove("tab-hidden");
    listTwo.classList.add("active");
    listTwo.classList.remove("hidden")

    tabThree.classList.remove("tab-active");
    tabThree.classList.add("tab-hidden");
    listThree.classList.remove("active");
    listThree.classList.add("hidden");

    tabFour.classList.remove("tab-active");
    tabFour.classList.add("tab-hidden");
    listFour.classList.remove("active");
    listFour.classList.add("hidden");
}

function dataChangeThree() {
    tabOne.classList.remove("tab-active");
    tabOne.classList.add("tab-hidden");
    listOne.classList.remove("active");
    listOne.classList.add("hidden");

    tabTwo.classList.remove("tab-active");
    tabTwo.classList.add("tab-hidden");
    listTwo.classList.remove("active");
    listTwo.classList.add("hidden");

    tabThree.classList.add("tab-active");
    tabThree.classList.remove("tab-hidden");
    listThree.classList.add("active");
    listThree.classList.remove("hidden")

    tabFour.classList.remove("tab-active");
    tabFour.classList.add("tab-hidden");
    listFour.classList.remove("active");
    listFour.classList.add("hidden");
}

function dataChangeFour() {
    tabOne.classList.remove("tab-active");
    tabOne.classList.add("tab-hidden");
    listOne.classList.remove("active");
    listOne.classList.add("hidden");

    tabTwo.classList.remove("tab-active");
    tabTwo.classList.add("tab-hidden");
    listTwo.classList.remove("active");
    listTwo.classList.add("hidden");

    tabThree.classList.remove("tab-active");
    tabThree.classList.add("tab-hidden");
    listThree.classList.remove("active");
    listThree.classList.add("hidden");

    tabFour.classList.add("tab-active");
    tabFour.classList.remove("tab-hidden");
    listFour.classList.add("active");
    listFour.classList.remove("hidden");
}


function openNav() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("main").style.opacity = "0";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.opacity = "1";
}

document.addEventListener("scroll", (event) => {
    if(window.scrollY > 0){
        $(".header-sec").addClass("white-bg");
    }
    else{
        $(".header-sec").removeClass("white-bg");
    }
});

document.addEventListener("scroll", (event) => {
    const height = window.innerHeight;
    var pos_top = $(document).scrollTop()
    var pos_bottom = pos_top + height

    var anim_items = $(".custom-anim");
    var i;

    for (i = 0; i < anim_items.length; i++) {
        var x = $(anim_items[i]).offset().top;
        var y = $(anim_items[i]).height() + x;
        console.log(y)
        if( x > pos_top && y < pos_bottom ){
            $(anim_items[i]).addClass($(anim_items[i]).data("anim"));
        }
        else{
            $(anim_items[i]).removeClass($(anim_items[i]).data("anim"));
        }
    }
});