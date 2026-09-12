// form vars
const inputData = document.querySelector(".searchedCountry");
const form = document.querySelector("form");
const btn = document.querySelector(".btn");

// data vars 
const dataHolder = document.querySelector(".data");
const locationVar = document.querySelector(".country");
const latitude = document.querySelector(".latitude");
const longitude = document.querySelector(".longitude");
const temperature = document.querySelector(".temperature");



form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const searchedCountry = inputData.value

    btn.value = "Get Weather..."
    if (searchedCountry.trim() !== "") {
        try {

            const url = `/weather?country=${encodeURIComponent(searchedCountry)}`
            const res = await fetch(url)
            const data = await res.json()

            const { lat, lon, temp_c } = data

            btn.value = "Get Weather"
            dataHolder.classList.add("open")
            locationVar.textContent = searchedCountry
            latitude.textContent = lat
            longitude.textContent = lon
            temperature.textContent = temp_c + "°C"

            // locationVar.textContent =
        } catch (err) {
            console.log(err)
        }
    } else {
        btn.value = "Get Weather"
        dataHolder.classList.remove("open")
    }


})