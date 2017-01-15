const th = ['','k','m', 'billion','trillion'];

let slicer = function(input) {
    if(input.length <= 4){
        return false;
    }
    switch(input.length % 3){
        case 0: {
            return input.substring(0,3) + '.' + input[2];
        }
        case 1: {
            return input.substring(0,1) + '.' + input.substring(1,3);
        }
        case 2: {
            return input.substring(0,2) + '.' + input.substring(2,3);
        }
        default: {
            return;
        }

    }

}

export function toWords(s)
{
    var orig = s.toString();
    s = s.toString();
    s = s.replace(/[\, ]/g,'');
    if (s != parseFloat(s)) return 'not a number';
    var x = s.indexOf('.');
    if (x == -1) x = s.length;
    if (x > 15) return 'too big';
    if (x <= 4) return orig;
    var n = s.split('');
    var str = '';
    var sk = 0;
    for (var i=0; i < x; i++)
    {
        if ((x-i)%3==2)
        {
            if (n[i] == '1')
            {
                i++;
                sk=1;
            }
            else if (n[i]!=0)
            {
                sk=1;
            }
        }
        else if (n[i]!=0)
        {
            sk=1;
        }

        if ((x-i)%3==1)
        {
            if (sk) str += th[(x-i-1)/3];
            return slicer(orig) + str.replace(/\s+/g,' ');
        }
    }
    if (x != s.length)
    {
        var y = s.length;
        str += 'point ';
        for (var i=x+1; i<y; i++) str += dg[n[i]] +' ';
    }
    return str.replace(/\s+/g,' ');
}