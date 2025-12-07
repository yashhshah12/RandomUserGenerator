const BASEURL = "https://randomuser.me";
const ENDPOINT = "/api/?gender=male";
export async function getuser() {
    try {
    const response = await fetch(`${BASEURL}${ENDPOINT}`);
    if (!response.ok) {
        throw new Error("Response is bad" , response) ;
        
    }
const data = await response.json();
console.log(data);
if (data.results.length == 0 || !data.results) {
    throw new Error("The data does not exist");
    
}
return data.results[0];

    
    } catch (error) {
        console.log(error);
        return {
            picture:{medium: "image.png"},
            name: {first:"Unknow" , last:"User"},
            dob:{date:"--"},
            email:"N/A",
            phone:"N/A",
            location:{city:"N/A",country:"N/A"}
        

        }
        
    }

    
}
