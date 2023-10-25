

// 38.	Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

//  one default country value but one is not default



    function describeCity(city: string, country: string = "Default Country"): void {
        console.log(`${city} is in ${country}.`);
    }
    
    // Calling the function for different cities
    describeCity("lahore", "Pakistan"); // This explicitly specifies the country
    describeCity("Madina", "KSA"); // This explicitly specifies the country
    describeCity("Kuala Lumpur"); // Using the default country