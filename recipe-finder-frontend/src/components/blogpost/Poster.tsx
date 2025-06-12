import Post from '@/assets/images/poster.png'
const Poster = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-14 my-8">
      <img
        src={Post}
        alt="Post Banner"
        className="w-full h-[250px] sm:h-[400px] lg:h-[600px] object-cover rounded-2xl"
      />
    </div>
  );
};

export default Poster;
