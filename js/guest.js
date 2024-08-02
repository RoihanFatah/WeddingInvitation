document.addEventListener('DOMContentLoaded', () => {
    // const urlParams = window.location.pathname.split("/");
    // const slug = urlParams[urlParams.length - 2]
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('name')

fetch("../data/info.json")
    .then(response => response.json())
    .then(data => {
        const guest = data.find(item => item.Slug === slug);

        console.log(guest);

        if (guest) {
            document.getElementById("guestLabel").textContent = `${guest.Label} Sekeluarga`
        } else {
            document.getElementById("guestLabel").textContent = "TAMU"
            document.getElementById("openInvitation").disabled = true
        }
    })

    .catch(error => console.error('Error : ',error))
})

