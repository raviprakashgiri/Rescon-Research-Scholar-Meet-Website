// Scripts written out of taken template

var deptRegistrationsPage={ MECH:"http://www.me.iitb.ac.in/",
        OTHER:"http://rescon2015.doattend.com/"};

function register(dept)
{
    window.location.href = deptRegistrationsPage[dept];
    //alert("Coming Soon...");
    //window.location.href = "coming-soon.html";
}

function homeMouseOver(obj)
{
    //document.getElementById('home-sub-menu').style.display="none";
    //document.getElementById('home-nav').style.backgroundColor="transparent";
    if(obj.id==='home-nav')
    {
       	document.getElementById('home-sub-menu').style.display="block";
    }
    else if(obj.id==='committee-nav')
    {
        document.getElementById('committee-sub-menu').style.display="block";
    }
        obj.style.backgroundColor="rgba(0, 0, 0, .2)";
}

function homeMouseOut(obj)
{
    obj.style.backgroundColor="transparent";
    if(obj.id==='home-nav')
    {
        document.getElementById('home-sub-menu').style.display="none";
    }
    else if(obj.id==='committee-nav')
    {
        document.getElementById('committee-sub-menu').style.display="none";
    }
    //document.getElementById('home-nav').style.backgroundColor="rgba(0, 0, 0, .2)";
    //document.getElementById('home-sub-menu').style.display="block";
}
