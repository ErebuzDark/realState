import React, { useState } from 'react';
import { main } from 'motion/react-client';

import ViewPartialDetials from '../components/modal/viewPartialDetials';

const Search = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [propName, setPropName] = useState();
  const [propDetails, setPropDetails] = useState();

  const [propId, setPropId] = useState();

  const openBottomModal = (id) => {
    setPropId(id);
    setIsModalOpen(true);
    console.log(id);
  }

  const resultsDummyData = [
    {id: 0, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI9fMQN6yEn-eXvb5x9QG0q4Qq2iUFYtqTNg&s", propName: "Florentino", size: "700 sq. ft.", details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."},
    {id: 1, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUE3ItwWG-tRCiURsbqYK3W-lLu9hIuKehtg&s", propName: "Esmael", size: "300 sq. ft.", details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."},
    {id: 2, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiqN-S1j1qB_kj1IP8lC1h1cZlZwq72GUS3Q&s", propName: "Diana", size: "500 sq. ft.", details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."},
    {id: 3, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyIUsCn_cak5Wy2HP7OYDNfc45ffrVSeMIjg&s", propName: "Hugo", size: "1500 sq. ft.", details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."},
    {id: 4, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCPy5rLJIKxPkNrkrGN6qgzlI7TNcBkFinnw&s", propName: "Selvestre", size: "346 sq. ft.", details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."},
  ];

  return (

    <main>
      <div className='flex flex-col md:flex-row  md:items-center gap-3 pb-8'>
        <h1 className='text-lg text-slate-400 p-1 font-light'>Search results for:</h1>
        <div className='flex flex-wrap'>
          <span className='text-sm text-slate-800 bg-slate-100 rounded-full border-[0.3px] p-2 mr-1'>Apartment</span>
          <span className='text-sm text-slate-800 bg-slate-100 rounded-full border-[0.3px] p-2 mr-1'>California</span>
          <span className='text-sm text-slate-800 bg-slate-100 rounded-full border-[0.3px] p-2 mr-1'>1000 sq.ft.</span>
        </div>
       
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 gap-y-14'>
        {resultsDummyData.map((property) => 
          <div 
            onClick={() => openBottomModal(property.id)}
            key={property.id}
            className='rounded-lg overflow-hidden'>
            <div 
              className='bg-slate-400 h-64'
              style={{  
                backgroundImage: "url("+ property.imageUrl +")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            ><div className='size-full hover:backdrop-blur-xs duration-300'></div>
            </div>
            <div className='bg-[#343434] text-white p-2'>
              <h1 className='text-2xl font-semibold'>{property.propName}</h1>
              <p className='text-sm font-thin'>{property.size}</p>
            </div>
          </div>
        )}
       
      </div>
      <p className='text-slate-600 text-lg text-center p-11'>No more results</p>
      {isModalOpen && <ViewPartialDetials propDetails={resultsDummyData[propId]} setIsModalOpen={setIsModalOpen}/>}
     
    </main>
  );
}

export default Search;
