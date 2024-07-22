let diodeColor = 'orange';
let diodeColor2 = 'red';
let clearColor = 'white';
$('#add').click(function () {
   let message = $('#message').val();
   
   console.log(message);
   let i = 0;

   let timerID = setInterval(function(){ 
    if(i < message.length){
        switch(message[i]){
            case 'a':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode6_2').css('backgroundColor', diodeColor);
                $('#diode5_2').css('backgroundColor', diodeColor);
                $('#diode4_2').css('backgroundColor', diodeColor);
                $('#diode3_2').css('backgroundColor', diodeColor);
                $('#diode2_3').css('backgroundColor', diodeColor);
                $('#diode3_4').css('backgroundColor', diodeColor);
                $('#diode4_3').css('backgroundColor', diodeColor);
                $('#diode4_4').css('backgroundColor', diodeColor);
                $('#diode5_4').css('backgroundColor', diodeColor);
                $('#diode6_4').css('backgroundColor', diodeColor);
                break;
            case 'b':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode2_2').css('backgroundColor', diodeColor);
                $('#diode3_2').css('backgroundColor', diodeColor);
                $('#diode4_2').css('backgroundColor', diodeColor);
                $('#diode5_2').css('backgroundColor', diodeColor);
                $('#diode6_2').css('backgroundColor', diodeColor);
                $('#diode6_3').css('backgroundColor', diodeColor);
                $('#diode6_4').css('backgroundColor', diodeColor);
                $('#diode5_4').css('backgroundColor', diodeColor);
                $('#diode4_4').css('backgroundColor', diodeColor);
                $('#diode4_3').css('backgroundColor', diodeColor);
                break;
            case 'c':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode3_2').css('backgroundColor', diodeColor);
                $('#diode4_2').css('backgroundColor', diodeColor);
                $('#diode5_2').css('backgroundColor', diodeColor);
                $('#diode6_3').css('backgroundColor', diodeColor);
                $('#diode6_4').css('backgroundColor', diodeColor);
                $('#diode2_3').css('backgroundColor', diodeColor);
                $('#diode2_4').css('backgroundColor', diodeColor);
                break;
            case 'd':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode2_2').css('backgroundColor', diodeColor);
                $('#diode3_2').css('backgroundColor', diodeColor);
                $('#diode4_2').css('backgroundColor', diodeColor);
                $('#diode5_2').css('backgroundColor', diodeColor);
                $('#diode6_2').css('backgroundColor', diodeColor);
                $('#diode6_3').css('backgroundColor', diodeColor);
                $('#diode2_3').css('backgroundColor', diodeColor);
                $('#diode3_4').css('backgroundColor', diodeColor);
                $('#diode4_4').css('backgroundColor', diodeColor);
                $('#diode5_4').css('backgroundColor', diodeColor);
                break;
            case 'e':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode2_2').css('backgroundColor', diodeColor);
                $('#diode2_4').css('backgroundColor', diodeColor);
                $('#diode4_3').css('backgroundColor', diodeColor); 
                $('#diode3_2').css('backgroundColor', diodeColor);
                $('#diode4_2').css('backgroundColor', diodeColor);
                $('#diode5_2').css('backgroundColor', diodeColor);
                $('#diode6_2').css('backgroundColor', diodeColor);
                $('#diode6_3').css('backgroundColor', diodeColor);
                $('#diode2_3').css('backgroundColor', diodeColor);
                $('#diode4_4').css('backgroundColor', diodeColor);
                $('#diode6_4').css('backgroundColor', diodeColor);
                break;
            case 'f':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode2_4').css('backgroundColor', diodeColor);
                $('#diode2_3').css('backgroundColor', diodeColor);
                $('#diode3_3').css('backgroundColor', diodeColor);
                $('#diode4_3').css('backgroundColor', diodeColor);
                $('#diode5_3').css('backgroundColor', diodeColor);
                $('#diode6_3').css('backgroundColor', diodeColor);
                $('#diode4_2').css('backgroundColor', diodeColor);
                $('#diode4_4').css('backgroundColor', diodeColor);
                break;
            case 'g':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode2_2').css('backgroundColor', diodeColor);
                $('#diode2_4').css('backgroundColor', diodeColor);
                $('#diode2_3').css('backgroundColor', diodeColor);
                $('#diode3_2').css('backgroundColor', diodeColor);
                $('#diode3_4').css('backgroundColor', diodeColor);
                $('#diode4_3').css('backgroundColor', diodeColor);
                $('#diode4_2').css('backgroundColor', diodeColor);
                $('#diode4_4').css('backgroundColor', diodeColor);
                $('#diode5_4').css('backgroundColor', diodeColor);
                $('#diode6_2').css('backgroundColor', diodeColor);
                $('#diode6_3').css('backgroundColor', diodeColor);
                $('#diode6_4').css('backgroundColor', diodeColor);
                break;
            case 'h':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode2_2').css('backgroundColor', diodeColor);        
                $('#diode3_2').css('backgroundColor', diodeColor);
                $('#diode4_3').css('backgroundColor', diodeColor);
                $('#diode4_2').css('backgroundColor', diodeColor);
                $('#diode4_4').css('backgroundColor', diodeColor);
                $('#diode5_2').css('backgroundColor', diodeColor);
                $('#diode5_4').css('backgroundColor', diodeColor);
                $('#diode6_2').css('backgroundColor', diodeColor);
                $('#diode6_4').css('backgroundColor', diodeColor);
                break;
            case 'i':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode2_3').css('backgroundColor', diodeColor);        
                $('#diode4_3').css('backgroundColor', diodeColor); 
                $('#diode5_3').css('backgroundColor', diodeColor); 
                $('#diode6_3').css('backgroundColor', diodeColor); 
                break;    
            case 'm':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode2_2').css('backgroundColor', diodeColor);        
                $('#diode3_2').css('backgroundColor', diodeColor);
                $('#diode4_2').css('backgroundColor', diodeColor); 
                $('#diode5_2').css('backgroundColor', diodeColor); 
                $('#diode6_2').css('backgroundColor', diodeColor); 
                $('#diode3_3').css('backgroundColor', diodeColor);
                $('#diode2_4').css('backgroundColor', diodeColor);        
                $('#diode3_4').css('backgroundColor', diodeColor);
                $('#diode4_4').css('backgroundColor', diodeColor); 
                $('#diode5_4').css('backgroundColor', diodeColor); 
                $('#diode6_4').css('backgroundColor', diodeColor); 
                break;  
            case 'n':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode2_1').css('backgroundColor', diodeColor);
                $('#diode3_1').css('backgroundColor', diodeColor);
                $('#diode4_1').css('backgroundColor', diodeColor);
                $('#diode5_1').css('backgroundColor', diodeColor);
                $('#diode6_1').css('backgroundColor', diodeColor);
                $('#diode3_2').css('backgroundColor', diodeColor);
                $('#diode4_3').css('backgroundColor', diodeColor);
                $('#diode5_4').css('backgroundColor', diodeColor);
                $('#diode2_5').css('backgroundColor', diodeColor);
                $('#diode3_5').css('backgroundColor', diodeColor);
                $('#diode4_5').css('backgroundColor', diodeColor);
                $('#diode5_5').css('backgroundColor', diodeColor);
                $('#diode6_5').css('backgroundColor', diodeColor);
                break;  
            case 'o':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode2_2').css('backgroundColor', diodeColor);
                $('#diode2_3').css('backgroundColor', diodeColor);
                $('#diode2_4').css('backgroundColor', diodeColor);
                $('#diode3_1').css('backgroundColor', diodeColor);
                $('#diode4_1').css('backgroundColor', diodeColor);
                $('#diode5_1').css('backgroundColor', diodeColor);              
                $('#diode3_5').css('backgroundColor', diodeColor);
                $('#diode4_5').css('backgroundColor', diodeColor);
                $('#diode5_5').css('backgroundColor', diodeColor);
                $('#diode6_2').css('backgroundColor', diodeColor);
                $('#diode6_3').css('backgroundColor', diodeColor);
                $('#diode6_4').css('backgroundColor', diodeColor);
                break;  
            case 'p':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode2_2').css('backgroundColor', diodeColor);        
                $('#diode2_3').css('backgroundColor', diodeColor);
                $('#diode3_2').css('backgroundColor', diodeColor);
                $('#diode4_2').css('backgroundColor', diodeColor); 
                $('#diode5_2').css('backgroundColor', diodeColor); 
                $('#diode6_2').css('backgroundColor', diodeColor); 
                $('#diode4_3').css('backgroundColor', diodeColor);
                $('#diode4_4').css('backgroundColor', diodeColor);
                $('#diode2_4').css('backgroundColor', diodeColor);        
                $('#diode3_4').css('backgroundColor', diodeColor);
                break; 
            case 'q':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode2_2').css('backgroundColor', diodeColor);
                $('#diode2_3').css('backgroundColor', diodeColor);
                $('#diode2_4').css('backgroundColor', diodeColor);
                $('#diode3_1').css('backgroundColor', diodeColor);
                $('#diode4_1').css('backgroundColor', diodeColor);
                $('#diode5_1').css('backgroundColor', diodeColor);              
                $('#diode3_5').css('backgroundColor', diodeColor);
                $('#diode4_5').css('backgroundColor', diodeColor);
                $('#diode5_5').css('backgroundColor', diodeColor);
                $('#diode6_2').css('backgroundColor', diodeColor);
                $('#diode6_3').css('backgroundColor', diodeColor);
                $('#diode6_4').css('backgroundColor', diodeColor);
                $('#diode7_5').css('backgroundColor', diodeColor);
                break; 
            case 'r':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode2_2').css('backgroundColor', diodeColor);
                $('#diode2_3').css('backgroundColor', diodeColor);
                $('#diode2_4').css('backgroundColor', diodeColor);
                $('#diode3_2').css('backgroundColor', diodeColor);
                $('#diode3_4').css('backgroundColor', diodeColor);
                $('#diode4_2').css('backgroundColor', diodeColor);
                $('#diode4_3').css('backgroundColor', diodeColor);
                $('#diode4_4').css('backgroundColor', diodeColor);
                $('#diode5_2').css('backgroundColor', diodeColor);
                $('#diode5_3').css('backgroundColor', diodeColor);
                $('#diode6_2').css('backgroundColor', diodeColor);
                $('#diode6_4').css('backgroundColor', diodeColor);
                break;     
            case 's':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode2_2').css('backgroundColor', diodeColor);
                $('#diode2_3').css('backgroundColor', diodeColor);
                $('#diode2_4').css('backgroundColor', diodeColor);
                $('#diode3_2').css('backgroundColor', diodeColor);
                $('#diode4_2').css('backgroundColor', diodeColor);
                $('#diode4_3').css('backgroundColor', diodeColor);
                $('#diode4_4').css('backgroundColor', diodeColor);   
                $('#diode5_4').css('backgroundColor', diodeColor);
                $('#diode6_2').css('backgroundColor', diodeColor);
                $('#diode6_3').css('backgroundColor', diodeColor);
                $('#diode6_4').css('backgroundColor', diodeColor);
                break;
            case 't':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode2_2').css('backgroundColor', diodeColor);
                $('#diode2_3').css('backgroundColor', diodeColor);
                $('#diode2_4').css('backgroundColor', diodeColor);
                $('#diode3_3').css('backgroundColor', diodeColor);
                $('#diode4_3').css('backgroundColor', diodeColor);
                $('#diode5_3').css('backgroundColor', diodeColor);
                $('#diode6_3').css('backgroundColor', diodeColor);
                break;
            case 'u':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode2_2').css('backgroundColor', diodeColor);
                $('#diode2_4').css('backgroundColor', diodeColor);
                $('#diode3_2').css('backgroundColor', diodeColor);
                $('#diode4_2').css('backgroundColor', diodeColor);
                $('#diode5_2').css('backgroundColor', diodeColor);
                $('#diode6_3').css('backgroundColor', diodeColor);
                $('#diode3_4').css('backgroundColor', diodeColor);
                $('#diode4_4').css('backgroundColor', diodeColor);
                $('#diode5_4').css('backgroundColor', diodeColor);
                break;
            case 'v':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode2_1').css('backgroundColor', diodeColor);
                $('#diode2_5').css('backgroundColor', diodeColor);
                $('#diode3_1').css('backgroundColor', diodeColor);
                $('#diode4_2').css('backgroundColor', diodeColor);
                $('#diode5_2').css('backgroundColor', diodeColor);
                $('#diode6_3').css('backgroundColor', diodeColor);
                $('#diode3_5').css('backgroundColor', diodeColor);
                $('#diode4_4').css('backgroundColor', diodeColor);
                $('#diode5_4').css('backgroundColor', diodeColor);
                break;
            case 'w':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode2_1').css('backgroundColor', diodeColor);
                $('#diode2_3').css('backgroundColor', diodeColor);
                $('#diode2_5').css('backgroundColor', diodeColor);
                $('#diode3_1').css('backgroundColor', diodeColor);
                $('#diode3_3').css('backgroundColor', diodeColor);
                $('#diode5_2').css('backgroundColor', diodeColor);
                $('#diode3_5').css('backgroundColor', diodeColor);
                $('#diode4_1').css('backgroundColor', diodeColor);  
                $('#diode4_3').css('backgroundColor', diodeColor);  
                $('#diode4_5').css('backgroundColor', diodeColor);  
                $('#diode5_4').css('backgroundColor', diodeColor);
                $('#diode6_2').css('backgroundColor', diodeColor);
                $('#diode6_4').css('backgroundColor', diodeColor);
                break;
            case 'x':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode2_1').css('backgroundColor', diodeColor);
                $('#diode2_5').css('backgroundColor', diodeColor);
                $('#diode3_2').css('backgroundColor', diodeColor);
                $('#diode3_4').css('backgroundColor', diodeColor);
                $('#diode4_3').css('backgroundColor', diodeColor);
                $('#diode5_2').css('backgroundColor', diodeColor);
                $('#diode5_4').css('backgroundColor', diodeColor);
                $('#diode6_1').css('backgroundColor', diodeColor);
                $('#diode6_5').css('backgroundColor', diodeColor);
                break;
            case 'y':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode2_1').css('backgroundColor', diodeColor);
                $('#diode2_5').css('backgroundColor', diodeColor);
                $('#diode3_2').css('backgroundColor', diodeColor);
                $('#diode3_4').css('backgroundColor', diodeColor);
                $('#diode4_3').css('backgroundColor', diodeColor);
                $('#diode5_3').css('backgroundColor', diodeColor);
                $('#diode6_3').css('backgroundColor', diodeColor);
                break;
            case 'z':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode2_1').css('backgroundColor', diodeColor2);
                $('#diode2_5').css('backgroundColor', diodeColor2);
                $('#diode3_2').css('backgroundColor', diodeColor2);
                $('#diode3_4').css('backgroundColor', diodeColor2);
                $('#diode4_3').css('backgroundColor', diodeColor2);
                $('#diode5_2').css('backgroundColor', diodeColor2);
                $('#diode5_4').css('backgroundColor', diodeColor2);
                $('#diode6_1').css('backgroundColor', diodeColor2);
                $('#diode6_5').css('backgroundColor', diodeColor2);
                break;
            case '1':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode2_3').css('backgroundColor', diodeColor);
                $('#diode3_2').css('backgroundColor', diodeColor);
                $('#diode3_3').css('backgroundColor', diodeColor);
                $('#diode4_3').css('backgroundColor', diodeColor);
                $('#diode5_3').css('backgroundColor', diodeColor);
                $('#diode6_2').css('backgroundColor', diodeColor);
                $('#diode6_3').css('backgroundColor', diodeColor);
                $('#diode6_4').css('backgroundColor', diodeColor);
                break;
            case '2':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode2_3').css('backgroundColor', diodeColor);
                $('#diode3_2').css('backgroundColor', diodeColor);
                $('#diode3_4').css('backgroundColor', diodeColor);
                $('#diode4_3').css('backgroundColor', diodeColor);
                $('#diode5_2').css('backgroundColor', diodeColor);
                $('#diode6_2').css('backgroundColor', diodeColor);
                $('#diode6_3').css('backgroundColor', diodeColor);
                $('#diode6_4').css('backgroundColor', diodeColor);
                break;   
            case '3':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode2_2').css('backgroundColor', diodeColor);
                $('#diode2_4').css('backgroundColor', diodeColor);
                $('#diode4_3').css('backgroundColor', diodeColor); 
                $('#diode3_4').css('backgroundColor', diodeColor);
                $('#diode4_2').css('backgroundColor', diodeColor);
                $('#diode5_4').css('backgroundColor', diodeColor);
                $('#diode6_2').css('backgroundColor', diodeColor);
                $('#diode6_3').css('backgroundColor', diodeColor);
                $('#diode2_3').css('backgroundColor', diodeColor);
                $('#diode4_4').css('backgroundColor', diodeColor);
                $('#diode6_4').css('backgroundColor', diodeColor);
                break;                                                               
            case '4':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode2_2').css('backgroundColor', diodeColor);
                $('#diode2_4').css('backgroundColor', diodeColor);
                $('#diode4_3').css('backgroundColor', diodeColor);
                $('#diode3_2').css('backgroundColor', diodeColor); 
                $('#diode3_4').css('backgroundColor', diodeColor);
                $('#diode4_2').css('backgroundColor', diodeColor);
                $('#diode5_4').css('backgroundColor', diodeColor);
                $('#diode4_4').css('backgroundColor', diodeColor);
                $('#diode6_4').css('backgroundColor', diodeColor);
                break; 
            case '5':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode2_2').css('backgroundColor', diodeColor);
                $('#diode2_3').css('backgroundColor', diodeColor);
                $('#diode2_4').css('backgroundColor', diodeColor);
                $('#diode3_2').css('backgroundColor', diodeColor);
                $('#diode4_2').css('backgroundColor', diodeColor);
                $('#diode4_3').css('backgroundColor', diodeColor);
                $('#diode4_4').css('backgroundColor', diodeColor);   
                $('#diode5_4').css('backgroundColor', diodeColor);
                $('#diode6_2').css('backgroundColor', diodeColor);
                $('#diode6_3').css('backgroundColor', diodeColor);
                $('#diode6_4').css('backgroundColor', diodeColor);
                break;
            case '6':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode2_2').css('backgroundColor', diodeColor);
                $('#diode2_3').css('backgroundColor', diodeColor);
                $('#diode2_4').css('backgroundColor', diodeColor);
                $('#diode3_2').css('backgroundColor', diodeColor);
                $('#diode4_2').css('backgroundColor', diodeColor);
                $('#diode4_3').css('backgroundColor', diodeColor);
                $('#diode4_4').css('backgroundColor', diodeColor);   
                $('#diode5_2').css('backgroundColor', diodeColor);
                $('#diode5_4').css('backgroundColor', diodeColor);
                $('#diode6_2').css('backgroundColor', diodeColor);
                $('#diode6_3').css('backgroundColor', diodeColor);
                $('#diode6_4').css('backgroundColor', diodeColor);
                break;  
            case '7':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode2_2').css('backgroundColor', diodeColor);
                $('#diode2_4').css('backgroundColor', diodeColor);
                $('#diode2_3').css('backgroundColor', diodeColor); 
                $('#diode3_4').css('backgroundColor', diodeColor);             
                $('#diode5_4').css('backgroundColor', diodeColor);
                $('#diode4_4').css('backgroundColor', diodeColor);
                $('#diode6_4').css('backgroundColor', diodeColor);
                break; 
            case '8':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode2_2').css('backgroundColor', diodeColor);
                $('#diode2_3').css('backgroundColor', diodeColor);
                $('#diode2_4').css('backgroundColor', diodeColor);
                $('#diode3_2').css('backgroundColor', diodeColor);
                $('#diode4_2').css('backgroundColor', diodeColor);
                $('#diode5_2').css('backgroundColor', diodeColor);              
                $('#diode3_4').css('backgroundColor', diodeColor);
                $('#diode4_3').css('backgroundColor', diodeColor);
                $('#diode4_4').css('backgroundColor', diodeColor);
                $('#diode5_4').css('backgroundColor', diodeColor);
                $('#diode6_2').css('backgroundColor', diodeColor);
                $('#diode6_3').css('backgroundColor', diodeColor);
                $('#diode6_4').css('backgroundColor', diodeColor);
                break;   
            case '9':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode2_2').css('backgroundColor', diodeColor);
                $('#diode2_3').css('backgroundColor', diodeColor);
                $('#diode2_4').css('backgroundColor', diodeColor);
                $('#diode3_2').css('backgroundColor', diodeColor);
                $('#diode3_4').css('backgroundColor', diodeColor);
                $('#diode4_2').css('backgroundColor', diodeColor);
                $('#diode4_3').css('backgroundColor', diodeColor);
                $('#diode4_4').css('backgroundColor', diodeColor);            
                $('#diode5_4').css('backgroundColor', diodeColor);
                $('#diode6_2').css('backgroundColor', diodeColor);
                $('#diode6_3').css('backgroundColor', diodeColor);
                $('#diode6_4').css('backgroundColor', diodeColor);
                break;  
           case '0':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode2_2').css('backgroundColor', diodeColor);
                $('#diode2_3').css('backgroundColor', diodeColor);
                $('#diode2_4').css('backgroundColor', diodeColor);
                $('#diode3_2').css('backgroundColor', diodeColor);
                $('#diode4_2').css('backgroundColor', diodeColor);
                $('#diode5_2').css('backgroundColor', diodeColor);              
                $('#diode3_4').css('backgroundColor', diodeColor);
                $('#diode4_4').css('backgroundColor', diodeColor);
                $('#diode5_4').css('backgroundColor', diodeColor);
                $('#diode6_2').css('backgroundColor', diodeColor);
                $('#diode6_3').css('backgroundColor', diodeColor);
                $('#diode6_4').css('backgroundColor', diodeColor);
                break;    
            case '!':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode2_3').css('backgroundColor', diodeColor);        
                $('#diode4_3').css('backgroundColor', diodeColor); 
                $('#diode3_3').css('backgroundColor', diodeColor); 
                $('#diode6_3').css('backgroundColor', diodeColor); 
                break;  
            case '?':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode2_3').css('backgroundColor', diodeColor);    
                $('#diode2_4').css('backgroundColor', diodeColor);        
                $('#diode2_2').css('backgroundColor', diodeColor);   
                $('#diode3_1').css('backgroundColor', diodeColor); 
                $('#diode4_4').css('backgroundColor', diodeColor); 
                $('#diode3_5').css('backgroundColor', diodeColor); 
                $('#diode5_3').css('backgroundColor', diodeColor); 
                $('#diode7_3').css('backgroundColor', diodeColor); 
                break;
            case '.':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode4_3').css('backgroundColor', diodeColor); 
                $('#diode4_4').css('backgroundColor', diodeColor); 
                $('#diode5_3').css('backgroundColor', diodeColor);
                $('#diode5_4').css('backgroundColor', diodeColor);   
                break;
            case ',':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode4_3').css('backgroundColor', diodeColor); 
                $('#diode6_4').css('backgroundColor', diodeColor);
                $('#diode5_4').css('backgroundColor', diodeColor);   
                break;
            case '/':
                $('.diode').css('backgroundColor', clearColor);
                $('#diode2_4').css('backgroundColor', diodeColor);
                $('#diode3_4').css('backgroundColor', diodeColor); 
                $('#diode4_3').css('backgroundColor', diodeColor);
                $('#diode5_3').css('backgroundColor', diodeColor);
                $('#diode6_2').css('backgroundColor', diodeColor);         
                $('#diode7_2').css('backgroundColor', diodeColor);   
                break;                           
        }
        i++;
    }
   }, 500)

})