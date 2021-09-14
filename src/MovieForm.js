import { useRef } from "react";

function MovieForm(props) {
  const { onRefresh } = props;
  const titleRef = useRef();
  const summaryRef = useRef();
  const posterRef = useRef();

  const getFormData = () => {
    return {
      title: titleRef.current.value,
      summary: summaryRef.current.value,
      poster: posterRef.current.value
    }
  }

  const setFormData = (data = {}) => {
    const { title, summary, poster } = data;
    titleRef.current.value = title || '';
    summaryRef.current.value = summary || '';
    posterRef.current.value = poster || '';
  }

  const validData = (data) => {
    return data.title && data.summary && data.poster;
  }

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const data = getFormData();
    if (!validData(data)) {
      return false;
    }
    try {
      const response = await fetch('https://react-http-crud-default-rtdb.firebaseio.com/movies.json', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const addedID = await response.json();
      onRefresh();
      console.log('addedID', addedID);
    } catch (error) {
      console.log('error', error);
    }
    setFormData();
    console.log('data', data);
  }

  return (
    <form onSubmit={handleSubmitForm} className="MovieForm">
      <label>
        Title
        <input type="text" id="title" name="name" ref={titleRef} />
      </label>
      <label>
        Summary
        <input type="text" id="title" name="name" ref={summaryRef} />
      </label>
      <label>
        Poster
        <input type="text" id="title" name="name" ref={posterRef} />
      </label>
      <div>
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default MovieForm;