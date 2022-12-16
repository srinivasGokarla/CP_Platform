var special =  {
    item : "FireFox",
    reverse : function() {
        var out = '';
        for(var i = this.item.length-1; i >= 0; i--) {
            out = out + this.item[i];
        }
        return out;
    },
    vowelscount : function() {
        var count = 0;
        var vowels = 'aeiouAEIOU';
        for(var i = 0; i < this.item.length; i++) {
            for(var j = 0; j < vowels.length; j++) {
                if(this.item[i] == vowels[j]) {
                    count++;
                    break;
                }
            }
        }
        console.log("vowels count -" + count);
    },
    changecase : function( ) {
        var lower = "abcdefghijklmnopqrstuvwxyz";
        var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var out = " ";
        for(var i = 0; i < this.item.length; i++) {
            var char = this.item[i];
            var casechar = null;
            for(j = 0; j < lower.length; j++) {
if(char == lower[j]) {
    break;
}
            }
            if(casechar == null) {
                for(var j = 0; j< upper.length; j++) {
                    if(char == upper[j]) {
                        casechar = lower[j];
                        break;
                    }
                }
            }
            if(casechar != null) {
                out = out + casechar;
            }else {
                out = out + char;
            }
            console.log(out);
    }
}
}
