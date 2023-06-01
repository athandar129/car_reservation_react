import React, { useContext, useState } from 'react'
import { Sidebar } from '../sidebar/AdminSidebar';
import Navbar from '../navbar/navbar';
import { Button, Dialog, DialogContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import axios from 'axios';
import { useAppSelector } from '../../redux/features/Hook';


interface CarData {
  id: number;
  brand: string;
  licence_no: string;
  capacity: number;

}
const CreateCar = () => {
  const authRedux = useAppSelector((state) => state.auth);
  const { darkMode } = useContext(DarkModeContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState<CarData>({
    id: 0,
    brand: "",
    capacity: 0,
    licence_no: "",

  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleCreate = (e: any) => {
    sendDataToBackend({ inputValue });
    navigate(-1);
  }

  const sendDataToBackend = (data: { inputValue: CarData }) => {
   return new Promise((resolve, reject) => {
    axios
      .post("http://127.0.0.1:8000/api/cars",{
        brand: inputValue.brand,
        licence_no: inputValue.licence_no,
        capacity: inputValue.capacity,
        },{
          headers: {
            Authorization: `Bearer ${authRedux.token}`,
          }
        })
        .then((response) => {
          console.log(response.data);
          resolve(response.data);
        })
        .catch((reason) => {
          reject(reason);
        });
    });
  };
  const onBackDropClick = () => {
    setOpen(false);
  };
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogContent>
            <h1 className={darkMode ? 'dark_title' : 'page_title'}>Car Data Form</h1>
            <div>
              <div className="elem-group">
                <label htmlFor="brand">Brand / Model:</label>
                <input type="text" name="brand" value={inputValue.brand} onChange={handleInputChange} />
              </div>
              <div className="elem-group">
                <label htmlFor="licence_no">Licence No:</label>
                <input type="text" name="licence_no" value={inputValue.licence_no} onChange={handleInputChange} placeholder="To meet with the client" />
              </div>
              <div className="elem-group">
                <label htmlFor="Capacity">Capacity:</label>
                <input type="number" name="capacity" value={inputValue.capacity} onChange={handleInputChange} placeholder="Galaxay Condo" required />
              </div>
              <Button
                onClick={handleCreate}
                variant="contained"
                color="primary"
                size="small"
              >
                Reserve
              </Button>
              <Button
                onClick={onBackDropClick}
                variant="contained"
                color="primary"
                size="small"
              >
                Cancel
              </Button>
            </div>

          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default CreateCar
