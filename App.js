/**
 * <div id="parent">
 * <div id="child">
 * <h1>I'm h1 tag</h1>
 * </div>
 * </div>
 *
 *
 *
 *
 */
// Above example is for nested tag

//const heading = React.createElement("div", {id:'parent'}, React.createElement("div", {id:'child'}, React.createElement("h1", {id:'parent'},'Im h1 tag')))

/**
 * <div id="parent">
 * <div id="child">
 * <h1>I'm h1 tag</h1>
 * <h2>I'm h1 tag</h1>
 * </div>
 * </div>
 *
 *
 *
 *
 */
//const heading = React.createElement("div", {id:'parent'}, React.createElement("div", {id:'child'}, [React.createElement("h1", {id:'parent'},'Im h1 tag'),React.createElement("h2", {id:'parent'},'Im h2 tag')]))
/**
 * <div id="parent">
 * <div id="child1">
 * <h1>I'm h1 tag</h1>
 * <h2>I'm h2 tag</h1>
 * </div>
 * <div id="child2">
 * <h1>I'm h1 tag</h1>
 * <h2>I'm h2 tag</h1>
 * </div>
 * </div>
 *
 *
 *
 *
 */
const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Im h1 tag"),
    React.createElement("h2", {}, "Im h2 tag"),
  ]),
  React.createElement("div", {}, [
    React.createElement("h1", {}, "Im h1 tag"),
    React.createElement("h2", {}, "Im h2 tag"),
  ]),
]);

// Below element is for 1 tag with text
//const heading = React.createElement("h1", {id:'heading'}, "RJT- dreact") // creating element using react with first react api
// Second parameter is used to give attributes to your node or html element
const root = ReactDOM.createRoot(document.getElementById("root")); // Creating root with react with second api
root.render(heading);
