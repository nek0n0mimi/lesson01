const profiles = {
  profiles: [
    {
      name: "佐藤",
      age: 22
    },
    {
      name: "鈴木",
      age: 34
    },
    {
      name: "高橋",
      age: 42
    },
    {
      name: "田中",
      age: 15
    }
  ]
}

const profile = profiles.profiles;

for (let i=0; i<profiles.profiles.length; i++) {
  console.log(profiles.profiles[i].name + ":" + profiles.profiles[i].age);
}
