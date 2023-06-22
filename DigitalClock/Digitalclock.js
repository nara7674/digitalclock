function digitalclk()
{
    var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();

    var dt=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var day=date.getDay();

    if(hh>=12)
    {
        am_pm="pm";

        if(hh>12)
        {
            hh-=12;
        }
    }
    if(hh==0)
    {
        hh=12;
    }
    if(mo==0)
    {
        mo="Jan"
    }
    if(mo==1)
    {
        mo="feb"
    }
    if(mo==2)
    {
        mo="Mar"
    }
    if(mo==3)
    {
        mo="Apr"
    }
    if(mo==4)
    {
        mo="May"
    }
    if(mo==5)
    {
        mo="Jun"
    }
    if(mo==6)
    {
        mo="jul"
    }
    if(mo==7)
    {
        mo="Aug"
    }
    if(mo==8)
    {
        mo="Sep"
    }
    if(mo==9)
    {
        mo="Oct"
    }
    if(mo==10)
    {
        mo="Nov"
    }
    if(mo==11)
    {
        mo="dec"
    }

    switch(day)
    {
        case 0: day="sunday";
        break;

        case 1: day="Monday";
        break;

        case 2: day="Tuesday";
        break;

        case 3: day="Wednesday";
        break;

        case 4: day="Thursday";
        break;

        case 5: day="Friday";
        break;

        case 6: day="Saturday";
        break;
    }
    document.getElementById("Date").innerHTML=`${dt}/${mo}/${yy}`;
    document.getElementById("Time").innerHTML=`${hh}:${mm} ${am_pm}`;
    document.getElementById("Day").innerHTML=day;
    document.getElementById("sec").innerHTML=ss;
    setTimeout(digitalclk,1000)
}
digitalclk();