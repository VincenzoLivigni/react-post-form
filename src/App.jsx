
function App() {



  return (
    <>
      <header className="py-3 text-center">
        <h1>Post Form</h1>
      </header>

      <main>
        <div className="container mt-5">
          <h3>Compila il form</h3>
          <form className="p-3 border bg-success text-light">

            <div className="mb-3">
              <label className="form-label">Author</label>
              <input type="text" className="form-control" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Title</label>
              <input type="text" className="form-control" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Body</label>
              <input type="text" className="form-control" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Public</label>
              <input type="text" className="form-control" required />
            </div>

          </form>
        </div>
      </main>
    </>
  )
}

export default App
