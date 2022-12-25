import Categories from '../home/Categories/Categories';

const HomePage = () => {
  return (
    <div>
      <img
        style={{
          width: '100%',
          height: '50vh',
          objectFit: 'cover',
        }}
        src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Featured"
      />
      <Categories />
    </div>
  );
};

export default HomePage;
