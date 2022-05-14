const data = [
  {
    name: "Mahmud Islam",
    age: 20,
    gender: "male",
    lookingfor: "female",
    location: "Bangladesh",
    image: "https://randomuser.me/api/portraits/men/84.jpg",
  },
  {
    name: "Ms Mitu",
    age: 20,
    gender: "female",
    lookingfor: "male",
    location: "Dhaka",
    image: "https://randomuser.me/api/portraits/women/83.jpg",
  },
  {
    name: "Munna Sheikh",
    age: 25,
    gender: "male",
    lookingfor: "female",
    location: "Sirajgoj",
    image: "https://randomuser.me/api/portraits/men/82.jpg",
  },
];

const profiles = profileIterator(data);
nextProfile();

document.getElementById("next").addEventListener("click", nextProfile);

function nextProfile() {
  const currentProfile = profiles.next().value;
  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
	 <ul class="list-group">
	 <li class="list-group-item btn-pri">Name: ${currentProfile.name}</li>
	 <li class="list-group-item btn-dar">Age: ${currentProfile.age}</li>
	 <li class="list-group-item btn-lig">Location: ${currentProfile.location}</li>
	 <li class="list-group-item btn-pri">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor} </li>
	 </ul>
	 `;

    document.getElementById("imageDisplay").innerHTML = `
<img class="image" src="${currentProfile.image}">`;
  } else {
    window.location.reload();
  }
}

// profile itarator
function profileIterator(profiles) {
  let nextindex = 0;
  return {
    next: function () {
      return nextindex < profiles.length
        ? { value: profiles[nextindex++], done: false }
        : { done: true };
    },
  };
}
