import './App.css';
import './Agenda.js';



const data = [
{ name: "Jack", address: "Main Road", phone: 976545, email: "Jack@gmail.com", salary: 2000 },
{ name: "Sam", address: "Main Road", phone: 9476545, email: "Sam@gmail.com", salary: 2000 },
{ name: "Ron", address: "Main Road", phone: 9746545, email: "Ron@gmail.com", salary: 2000 },
{ name: "Harry", address: "Main Road", phone: 976545, email: "Harry@gmail.com", salary: 2000 },
{ name: "Hermione ", address: "Main Road", phone: 976545, email: "Hermione@gmail.com", salary: 2000 },
{ name: "Created ", address: "By", phone: 7038647356, email: "vaibhavdnalawade396@gmail.com", salary: 2000 },

]


function App() {
return (
	<div className="App">
    
	<table>
		<tr>
		<th>Name</th>
		<th>Address</th>
		<th>Phone</th>
		<th>Email</th>
		<th>Salary</th>
		</tr>
		{data.map((val, key) => {
		return (
			<tr key={key}>
			<td>{val.name}</td>
			<td>{val.address}</td>
			<td>{val.phone}</td>
			<td>{val.email}</td>
			<td>{val.salary}</td>
			
			</tr>
		)
		})}
	</table>
  
	</div>
);
}

export default App;
