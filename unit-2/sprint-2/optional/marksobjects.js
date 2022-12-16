var details = {
    data:[],
    average: function(){
       if(this.data.length == 0){
          return null;
       }
       var total = 0;
       for(var i = 0; i < this.data.length; i++){
          total = total + this.data[i].mk;
       }
       return total/this.data.length
    },
    minmarks: function(){
       var min = null;
       for(var i = 0;i < this.data.length; i++){
         if((min == null)||(this.data[i].mk) < (min.mk)){
            min = this.data[i];
         }
       }
       return min;
    },
    maxmarks: function(){
       var max = null;
       for(var i = 0;i < this.data.length; i++){
         if((max == null)||(this.data[i].mk) > (max.mk)){
            max = this.data[i];
         }
       }
       return max;
    },
    addmarksdata: function(name,marks){
       var mks = {nm: name, mk :marks};
          this.data.push(mks)
       }
    }
 details.addmarksdata("nrupul",10);
 details.addmarksdata("Prateek",20);
 details.addmarksdata("Aman",30);
 details.addmarksdata("Albert",5);
 details.addmarksdata("Yogesh",15);
 console.log(details.average());
 console.log(details.minmarks());
 console.log(details.maxmarks());