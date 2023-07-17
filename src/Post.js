import TagButton from "./TagButton"
export default function Post() {
  return (
    <div style={{padding: "10px", border: "solid #1d9bf0 5px", margin: "25px" }}>
      <h2>This is the post article</h2>
      <hr />
      <p>This is the post body</p>
      <TagButton />
    </div>
  )
}

