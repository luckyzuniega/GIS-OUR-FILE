function division()
        {
            var num1=parseFloat(document.getElementById('num1').value);
            var num2=parseFloat(document.getElementById('num2').value);
            var answer=num1/num2;
            document.getElementById('answer').innerHTML=answer;
        }