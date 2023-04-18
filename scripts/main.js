const print = (...data) => {
  console.log("GM-Leviathan tools", data);
};

Hooks.on("init", function () {
  print(
    "This code runs once the Foundry VTT software begins its initialization workflow."
  );
});

Hooks.on("ready", function () {
  print(
    "This code runs once core initialization is ready and game data is available."
  );
});

Hooks.on("refreshToken", function (token) {
  print("Refresh token", token);
});

//const myHookId = Hooks.on("updateActor", this.onUpdateActor.bind(this));
//Hooks.off('updateActor', this.onUpdateActor);
//async function onUpdateActor(actor, data, options, userId) {
//do my things here
//}

