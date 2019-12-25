console.log('Inside App.js');

const user = {
    name: 'Rajat Pandey',
    age: 30,
    location: 'Bangalore'
}
const template = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    {getLocation(user.location)}
  </div>
);

const app = {
    title: 'Indecision App',
    subtitle: 'There is some info'
}
const templateTwo = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.subtitle}</p>
    </div>
  );

function getLocation(location) {
    if(location) {
      return <p>Location: {location}</p>
    }
    return 'Unknown';
}
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
