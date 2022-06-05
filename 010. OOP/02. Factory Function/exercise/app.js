// 1. Create a function name (createRobot) return as object (name, talk())
// 2. Create multiple instances of that function.
function createRobot(name) {
  return {
    name: name,
    talk: function () {
      console.log("My name is " + name + ", the robot.");
    },
  };
}

//Create a robot with name Chitti
const robo1 = createRobot("Chitti");

robo1.talk();

// Create a robot with name Chitti 2.O Upgraded
const robo2 = createRobot("Chitti 2.O Upgraded");

robo2.talk();
