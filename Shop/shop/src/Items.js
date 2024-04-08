import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemBox from './ItemBox'; // Assuming ItemBox.js is in the same directory
const Items = ({ folderName }) => {
  
  // Define an array of imported image paths
  const imagePaths = [
    {
      src: '/img/image1.jpg',
      name: 'Motor 1'
    },
    {
      src: '/img/image2.jpg',
      name: 'Motor 2'
    },
    {
      src: '/img/image3.jpg',
      name: 'Motor 3'
    },
    {
      src: '/img/image4.jpg',
      name: 'Motor 4'
    }
    // Add other imported image paths here
  ];

  return (
    <Container>
      <Row>
        {/* Map over the array of image paths and render ItemBox for each */}
        {imagePaths.map((imagePath, index) => {
          // Generate URL based on the image path
          return (
            <Col key={index} xs={6} sm={6} md={4} lg={3}>
              <ItemBox
                title={imagePath.name}
                image={imagePath.src}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
  // console.log(folderName);
  // const [imageList, setImageList] = useState([]);

  // useEffect(() => {
  //   const fetchImageList = async () => {
  //     try {
  //       const imageFiles = await import(`./${folderName}`);
  //       const filenames = Object.keys(imageFiles).filter((filename) =>
  //         filename.endsWith('.jpg')
  //       );
  //       setImageList(filenames.map(imageName => ({
  //         title: imageName.replace('.jpg', ''),
  //         image: imageFiles[imageName].default,
  //       })));
  //     } catch (error) {
  //       console.error('Error fetching image list:', error);
  //     }
  //   };
  
  //   fetchImageList();
  // }, [folderName]);
  
  // // You don't need to use `require()` here anymore
  // const items = imageList.map((item, index) => ({
  //   id: index + 1,
  //   title: item.title,
  //   image: item.image,
  //   redirectUrl: `/item${index + 1}`,
  // }));
  
  // return (
  //   <Container>
  //     <Row>
  //       {items.map((item) => (
  //         <Col key={item.id} sm={6} md={4} lg={3}>
  //           <ItemBox
  //             title={item.title}
  //             image={item.image}
  //             redirectUrl={item.redirectUrl}
  //           />
  //         </Col>
  //       ))}
  //     </Row>
  //   </Container>
  // );
};

export default Items;
