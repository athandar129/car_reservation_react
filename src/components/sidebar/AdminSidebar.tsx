import DashboardIcon from "@mui/icons-material/Dashboard";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import CarRentalIcon from "@mui/icons-material/CarRental";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import AcePlus from "../img/mainLogo.png";
import { AuthRole } from "../../redux/features/type/authType";
import { useAppSelector } from "../../redux/features/Hook";
import Groups3Icon from "@mui/icons-material/Groups3";
import CarRepairTwoToneIcon from "@mui/icons-material/CarRepairTwoTone";
import RoomPreferencesTwoToneIcon from "@mui/icons-material/RoomPreferencesTwoTone";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import { useEffect, useState } from "react";

export const Sidebar = () => {
  const authRedux = useAppSelector((state) => state.auth);
  const [selectedItem, setSelectedItem] = useState("");

  const handleItemClick =(item: string) => {
    setSelectedItem(prevItem => prevItem !== item ? 'item' : "");
    
   };
  // const handleItemClick = (item: string): void => {
  //   setSelectedItem((prevItem: string) => (prevItem !== item ? item : ""));
  //   console.log(setSelectedItem(item));
  // };
  // const handleItemClick = (item: string) => {
  //   setSelectedItem(item);
  //   console.log(setSelectedItem(item));
  // };
  useEffect(() => {
    setSelectedItem("");
    // return () => setSelectedItem("");// Reset the selected item when the component mounts
  }, [selectedItem]);
  console.log(selectedItem);

  return (
    <div className="sidebar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <img src={AcePlus} alt="" width={130} className="img" />
      </Link>
      <hr />
      {(authRedux.role === AuthRole.Admin ||
        authRedux.role === AuthRole.Superadmin) && (
          <>
            <div className="center">
              <ul>
                <p className="title">MAIN</p>
                <Link
                  to={`/${authRedux.role}-dashboard/home`}
                  style={{ textDecoration: "none" }}
                >
                  <li
                    className={selectedItem === 'dashboard' ? 'active' : ''} onClick={() => handleItemClick("dashboard")}
                  >
                    <li/>
                    <DashboardIcon className="icon" />
                    <span>Dashboard</span>
                  </li>
                </Link>
                <p className="title">Lists</p>
                <Link
                  to={`/${authRedux.role}-dashboard/pro-user`}
                  style={{ textDecoration: "none" }}
                >
                  <li

                    className={selectedItem === "pro-user" ? 'active' : ''} onClick={() => handleItemClick("pro-user")}

                  >
                    <SupervisedUserCircleIcon className="icon" />
                    <span>Pro User</span>
                  </li>
                </Link>
                <Link
                  to={`/${authRedux.role}-dashboard/normal-user`}
                  style={{ textDecoration: "none" }}
                >
                  <li
                    className={selectedItem === "normal-user" ? 'active' : ''} onClick={() => handleItemClick("normal-user")}

                  >
                    <PersonIcon className="icon" />
                    <span>Normal User</span>
                  </li>
                </Link>
                <p className="title">Reservation</p>
                <Link
                  to={`/${authRedux.role}-dashboard/room-reservation`}
                  style={{ textDecoration: "none" }}
                >
                  <li
                    className={selectedItem === "room-list" ? 'active' : ''} onClick={() => handleItemClick("room-list")}

                  >
                    <MeetingRoomIcon className="icon" />
                    <span>Rooms</span>
                  </li>
                </Link>
                <Link
                  to={`/${authRedux.role}-dashboard/car`}
                  style={{ textDecoration: "none" }}
                >
                  <li
                    className={selectedItem === "car-list" ? 'active' : ''} onClick={() => handleItemClick("car-list")}

                  >
                    <CarRentalIcon className="icon" />
                    <span>Cars</span>
                  </li>
                </Link>
                <p className="title">Creation Process</p>
                <Link
                  to={`/${authRedux.role}-dashboard/team-creation`}
                  style={{ textDecoration: "none" }}
                >
                  <li
                    className={selectedItem === "team-create" ? 'active' : ''} onClick={() => handleItemClick("team-create")}

                  >
                    <Groups3Icon className="icon" />
                    <span>Create Team</span>
                  </li>
                </Link>
                <Link
                  to={`/${authRedux.role}-dashboard/car-creation`}
                  style={{ textDecoration: "none" }}
                >
                  <li
                    className={selectedItem === "car-create" ? 'active' : ''} onClick={() => handleItemClick("car-create")}

                  >
                    <CarRepairTwoToneIcon className="icon" />
                    <span>Create Car</span>
                  </li>
                </Link>
                <Link
                  to={`/${authRedux.role}-dashboard/room-creation`}
                  style={{ textDecoration: "none" }}
                >
                  <li
                    className={selectedItem === "room-create" ? 'active' : ''} onClick={() => handleItemClick("room-create")}

                  >
                    <RoomPreferencesTwoToneIcon className="icon" />
                    <span>Create room</span>
                  </li>
                </Link>
                <p className="title">Report</p>
                <Link
                  to={`/${authRedux.role}-dashboard/team-report`}
                  style={{ textDecoration: "none" }}
                >
                  <li
                    className={selectedItem === "team" ? 'active' : ''} onClick={() => handleItemClick("team")}

                  >
                    <MeetingRoomOutlinedIcon className="icon" />
                    <span>Team</span>
                  </li>
                </Link>
                <Link
                  to={`/${authRedux.role}-dashboard/room-reservation-report`}
                  style={{ textDecoration: "none" }}
                >
                  <li
                    className={selectedItem === "room-reservation" ? 'active' : ''} onClick={() => handleItemClick("room-reservation")}

                  >
                    <MeetingRoomOutlinedIcon className="icon" />
                    <span>Room Reservation</span>
                  </li>
                </Link>
                <Link
                  to={`/${authRedux.role}-dashboard/car-reservation-report`}
                  style={{ textDecoration: "none" }}
                >
                  <li
                    className={selectedItem === "car-reservation" ? 'active' : ''} onClick={() => handleItemClick("car-reservation")}

                  >
                    <CarRentalIcon className="icon" />
                    <span>Car Reservation</span>
                  </li>
                </Link>
              </ul>
            </div>
          </>
        )}
    </div>
  );
};
