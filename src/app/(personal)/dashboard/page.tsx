
const fetchData = () => fetch('https://jsonplaceholder.typicode.com/users/1', {
    next: {revalidate: 10}
}).then(res => res.json())

async function  DashboardPage () {

    const data = await fetchData()

    return (
        <div>
            {data.name}
        </div>
    );
};

export default DashboardPage