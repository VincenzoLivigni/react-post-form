import { useState } from "react";


function App() {

  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false
  })


  return (
    <>
      <header className="py-3 text-center bg-success text-light">
        <h1>Post Form</h1>
      </header>

      <main>
        <div className="container mt-5">
          <h3>Compila il form</h3>
          <form className="p-3 border bg-success text-light">

            <div className="mb-3">
              <label className="form-label">Author</label>
              <input className="form-control"
                type="text"
                name="author"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                placeholder="Enter the author's name of the post"
                required
              />
            </div>

          </form>
        </div>
      </main>
    </>
  )
}

export default App
