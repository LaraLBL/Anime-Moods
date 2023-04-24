import React from 'react';
function AddAnimeButton({ anime, handleAddToList }) {
  return (
    <div>
      <button onClick={() => handleAddToList(anime)}><i class="fa fa-plus" aria-hidden="true"></i></button>
      <button><i class="fa fa-thumbs-up" aria-hidden="true"></i></button>
      <button><i class="fa fa-thumbs-down" aria-hidden="true"></i></button>
      <button><i class="fa fa-comment" aria-hidden="true"></i></button>
    </div>
  );
}
export default AddAnimeButton;