import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/RootReducers';
import { Card, Avatar } from 'antd';

const { Meta } = Card;

const UserDetails = () => {

  // Get github information from reducer
  const { userInformation, error} = useSelector((state: RootState) => state.user);

  // Get List of repos from reducer
  const { repos } = useSelector((state: RootState) => state.repos);

  return (
    <div className='search-container'>
      {(Object.keys(userInformation).length > 0) && !error &&
        <Card
          style={{ width: 500 }}
        >
          <Meta
            avatar={<Avatar src={userInformation.avatar_url} size="large" />}
            title={userInformation.login}
            description={
              repos.length && repos.map((repo, index) => {
                return <div key={index} >
                  <a href={repo.html_url} target="_Blank" rel="noreferrer" >
                    {repo.html_url}
                  </a>
                </div>
              })

            }
          />
        </Card>
      }
      {
        error && <h3>No records found</h3>
      }
    </div>
  );
};

export default UserDetails;
