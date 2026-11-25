import { useEffect, useState } from "react";

function Gallery() {

  const [gallery, setGallery] = useState([]);

  const [filter, setFilter] = useState("all");

  const [showAdmin, setShowAdmin] = useState(false);

  const [title, setTitle] = useState("");

  const [type, setType] = useState("image");

  const [file, setFile] = useState(null);


  /* LOAD GALLERY */

  useEffect(() => {

    const savedGallery =
      JSON.parse(localStorage.getItem("spottraxGallery")) || [];

    setGallery(savedGallery);

  }, []);


  /* ADD FILE */

  const handleAdd = (e) => {

    e.preventDefault();

    if (!file || !title) {
      alert("Please enter title and select a file.");
      return;
    }


    const reader = new FileReader();

    reader.onload = () => {

      const newItem = {

        id: Date.now(),

        title: title,

        type: type,

        file: reader.result,

      };


      const updatedGallery = [
        newItem,
        ...gallery
      ];


      setGallery(updatedGallery);

      localStorage.setItem(
        "spottraxGallery",
        JSON.stringify(updatedGallery)
      );


      setTitle("");

      setFile(null);

      document.getElementById("gallery-file").value = "";

    };


    reader.readAsDataURL(file);

  };


  /* DELETE */

  const handleDelete = (id) => {

    const updatedGallery =
      gallery.filter(item => item.id !== id);

    setGallery(updatedGallery);

    localStorage.setItem(
      "spottraxGallery",
      JSON.stringify(updatedGallery)
    );

  };


  const filteredGallery =
    filter === "all"
      ? gallery
      : gallery.filter(item => item.type === filter);


  return (

    <section className="gallery-page">

      <div className="gallery-header">

        <div>

          <div className="section-label">
            SPOTTRAX WORKS
          </div>

          <h1>
            Our <span>Gallery</span>
          </h1>

          <p>
            Explore our events, campaigns, creative work and
            business projects.
          </p>

        </div>


        <button
          className="admin-toggle"
          onClick={() => setShowAdmin(!showAdmin)}
        >
          {showAdmin
            ? "Close Admin"
            : "Admin Upload"}
        </button>

      </div>


      {/* ADMIN PANEL */}

      {showAdmin && (

        <div className="admin-panel">

          <h2>
            Add Company Work
          </h2>

          <p>
            Frontend demo only — later this will connect
            to the SpottraX backend.
          </p>


          <form onSubmit={handleAdd}>

            <input
              type="text"
              placeholder="Work title"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
            />


            <select
              value={type}
              onChange={(e) =>
                setType(e.target.value)
              }
            >
              <option value="image">
                Photo
              </option>

              <option value="video">
                Video
              </option>
            </select>


            <input
              id="gallery-file"
              type="file"
              accept={
                type === "image"
                  ? "image/*"
                  : "video/*"
              }
              onChange={(e) =>
                setFile(e.target.files[0])
              }
            />


            <button type="submit">
              Add To Gallery
            </button>

          </form>

        </div>

      )}


      {/* FILTER */}

      <div className="gallery-filter">

        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={filter === "image" ? "active" : ""}
          onClick={() => setFilter("image")}
        >
          Photos
        </button>

        <button
          className={filter === "video" ? "active" : ""}
          onClick={() => setFilter("video")}
        >
          Videos
        </button>

      </div>


      {/* GALLERY */}

      <div className="gallery-grid">

        {filteredGallery.length === 0 && (

          <div className="empty-gallery">

            <div>
              ✦
            </div>

            <h3>
              No works uploaded yet
            </h3>

            <p>
              Admin can add company photos and videos.
            </p>

          </div>

        )}


        {filteredGallery.map(item => (

          <div
            className="gallery-card"
            key={item.id}
          >

            {item.type === "image" ? (

              <img
                src={item.file}
                alt={item.title}
              />

            ) : (

              <video
                src={item.file}
                controls
              />

            )}


            <div className="gallery-info">

              <h3>
                {item.title}
              </h3>

              <span>
                {item.type === "image"
                  ? "Photography"
                  : "Videography"}
              </span>

              {showAdmin && (

                <button
                  className="delete-button"
                  onClick={() =>
                    handleDelete(item.id)
                  }
                >
                  Delete
                </button>

              )}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Gallery;