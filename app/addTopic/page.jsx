const page = () => {
  return (
    <div>
      <form className="flex flex-col gap-3">
        <input type="text" className="border border-slate-500 px-8 py-2" placeholder="Topic Title" />
        <input type="text" className="border border-slate-500 px-8 py-2" placeholder="Topic Title" />
        <button className="">Add Topic</button>
      </form>
    </div>
  );
}

export default page;