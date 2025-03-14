import { useId, useState } from "react";
import Button from "./Button";
import './content.css';

function Content({ userEmail, setUserEmail, onLogout }) {
  const id = useId(0);
  const [editProfile, setEditProfile] = useState(false);

  function handleEditClick() {
    setEditProfile(true);
  }

  function handleSaveClick() {
    setEditProfile(false);
  }

  const editProfileClass = editProfile ? "" : "edit-readonly";

  return (
    <div className="content__div">
      Hello {userEmail}
      <div className='content__buttons'>
        {!editProfile
          ? <Button className='content__edit-button'
            visual="button" type="button" onClick={handleEditClick}>Edit Profile</Button>
          : <label className="edit__label" htmlFor={`${id}-email`}>
            <input
              className={`edit ${editProfileClass}`}
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <br />
            <Button className='content__save-button'
              visual="button" type="button" onClick={handleSaveClick}>Save</Button>
            {/* after clicking save, page was trigged to display new email address. */}
          </label>
        }
        <Button className='content__logout-button' visual="button" type="button" onClick={onLogout}>Logout</Button>
      </div>
    </div>
  );
}

export default Content;
