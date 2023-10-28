import React from 'react';
import {useUser} from "./UserProvider"

function UserContent() {
    const {userData} = useUser();
  return (
    <div>
      <p>{`I am ${userData.name}, aged ${userData.age}`}</p>
      <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, unde optio, autem molestiae
      vel porro sequi quis, alias blanditiis repellat fuga sed nulla eum fugiat. Quas, voluptatum animi
      quasi vitae suscipit assumenda atque laborum consequatur nostrum provident distinctio porro,
      debitis rem molestiae unde omnis aliquid cupiditate molestias minima aspernatur mollitia cum.
      Ratione ipsa quia alias aperiam beatae quod saepe. Rerum tenetur dicta cum, ullam sequi obcaecati 
      fugiat esse dignissimos veritatis sed nisi excepturi voluptatem eveniet, fugit assumenda. Mollitia
      aspernatur ex reprehenderit quidem ullam est animi ratione earum fuga ipsa, dolore assumenda consectetur
      itae non rerum ducimus facere eos! Dolorum, est.
      </p>
    </div>
  )
}

export default UserContent
