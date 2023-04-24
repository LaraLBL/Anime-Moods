export default function SearchPage() {
 return (
  <div class="search-container">
    <form action="/action_page.php">
      <input 
        type="text"
        placeholder="Seach by title.." 
        name="search"
      />
      <button type="submit">
        <i class="fa fa-search">
      </i></button>
    </form>
  </div>
 );
}