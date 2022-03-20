import styled from "styled-components";

export const Root = styled.div`
  padding-right: 2px;
  margin-top: 7px;
  background-color: #efefef;
`;
export const Container = styled.div`
  height: 83.9vh;
  overflow: scroll;

  overflow-x: hidden;

  color: #000;
  padding: 1rem 2rem 1rem 2rem;
`;
export const HadingButtonMainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  aling-items: center;
`;
export const HeadingMianDiv = styled.div``;

export const Heading = styled.div`
  font-family: Dosis, sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: #111210;
`;
export const SubHeading = styled.div`
  font-family: Dosis, sans-serif;
  font-size: 0.85rem;
  padding-top: 0.4rem;
  color: #57606b;
`;
export const ButtonMainDiv = styled.div``;
export const AddCategoryMainDiv = styled.div`
  margin-top: 1rem;
  padding: 1rem 1rem 1rem 1.5rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const AddCategoryHeading = styled.div`
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
`;

export const CategoryTableMainDiv = styled.div`
  // background-color: red;
  margin-top: 1rem;

  // display: flex;
  // justify-content: space-between;
`;
export const CategoryTableDiv = styled.div`
  background-color: #ffffff;
  // width: 100%;
  padding: 2rem;
`;
export const SubCategoryTableDiv = styled.div`
  background-color: #ffffff;
  // width: 100%;
  padding: 2rem;
  margin-top: 1rem;
`;

export const part = styled.div`
display: flex;
justify-content: space-between;
margin-left: 3rem;
margin-right: 3rem;
margin-top: 1rem;
align-items: center;

.title{
            width:30rem; 
            margin-right: 3.7rem;
        }

.Description{
    width:30rem; 
    height:10rem;
    border-color:blue;
    z-index:-0;
    margin-right: 3.7rem;
}
.category{
    margin-right: 19.9rem;
}
.Price{
    margin-right: 19.9rem;
}
.stock{
    margin-right: 19.9rem;
}
.contactNumber{
    margin-right: 19.9rem;
}
.Email{
    margin-right: 19.9rem;
}
.location{
    margin-right: 19.9rem;
}
.addbutton{

    margin-left: 7.9rem;
}
`;


