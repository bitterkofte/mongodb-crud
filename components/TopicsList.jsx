import EditButton from "./EditButton";
import RemoveButton from "./RemoveButton";

const getTopicsHandler = async() => {
  try {
    const res = await fetch('http://localhost:3000/api/topics', { cache: 'no-store' })
    if(!res.ok){
      throw new Error('Failed to fetch topics!');
    }
    return res.json();
  } catch (err) {
    console.log('Error.', err)
  }
} 

const TopicsList = async() => {
  const topics = await getTopicsHandler();
  return (
    <div className="p-8">
      {topics.map(t => )}
      <div className="p-4 border-4 border-slate-500 my-3 flex justify-between gap-5">
        <div className="">
          <h2 className="font-bold text-2xl">Topic Title</h2>
          <div className="">Topic</div>
        </div>

        <div className="flex gap-2 items-start">
          <RemoveButton />
          <EditButton />
        </div>
      </div>
    </div>
  );
};

export default TopicsList;
