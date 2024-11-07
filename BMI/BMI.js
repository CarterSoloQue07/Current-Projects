    function myFitBMI(){
        const height = parseInt(document.getElementById('height').value);
        const weight = parseInt(document.getElementById('pounds').value);
        const formName = document.getElementById('fName').value;
       
        // const heightWeightsquared = Math.pow(height / weight, 2); 
       // let bmi = ((heightWeightsquared) * 703).toFixed(2);

       const bmiSquared = (weight / Math.pow(height, 2)) * 703;
       const bmiValue = bmiSquared.toFixed(2);

        if (height === "" || isNaN(height)){
            result.innerHTML = "Provide a valid Height!";
            return;
        }
        else if (weight === "" || isNaN(weight)){
            result.innerHTML = "Provide a valid Weight!";
            return;
        }

       
        if (bmi < 18.5) {
            result.innerHTML = `Underweight: <span>${bmiValue}</span>`;
        } else if (bmi < 25) {
            result.innerHTML = `Normal: <span>${bmiValue}</span>`;
        } else if (bmi < 30) {
            result.innerHTML = `Overweight: <span>${bmiValue}</span>`;
        } else {
            result.innerHTML = `Obese: <span>${bmiValue}</span>`;
        }
    }




       /* if (bmi >= 18.5) result.innerHTML = 'Underweight: <span>$bmi</span>';
 
        else if (bmi >= 18.5 && bmi < 24.9) result.innerHTML = 'Normal: <span>$bmi</span>';

        else if (bmi >= 25 && bmi < 29.9) result.innerHTML = 'Overweight: <span>$bmi</span>';

        else if (bmi >= 30 && bmi < 34.9) result.innerHTML = 'Obese: <span>$bmi</span>';

        else result.innerHTML = 'Extremely Obese: <span>$bmi</span>'; */
        
    
    function showTime() {
        document.getElementById('Currenttime').innerHTML = new Date().toTimeString();
        document.getElementById('CurrentTime').innerHTML = new Date().toUTCString();

        const timeZones = [
            { id: 'currentTime', timeZone: 'America/Chicago'},
            { id: 'LAcurrent', timeZone: 'America/Los_Angeles'},
            { id: 'Tokyocurrent', timeZone: 'Asia/Tokyo'}
        ];

        timeZones.forEach((zone) => {
            const currenttime = new Date().toLocaleTimeString('en-US', {
                timeZone: zone.timeZone,
                hour12: false,
            });
            document.getElementById(zone.id).innerHTML = currenttime;
        });
    }

    showTime();
    setInterval(function () {
        showTime();
    }, 1000);
