import Link from 'next/link';
import {AiFillEdit} from 'react-icons/ai'

const EditButton = () => {
  return (
    <Link href={"/editTopic/${t._id}"} className='p-1 border-2 border-black rounded-lg cursor-pointer'>
      <AiFillEdit className='' size={24} />
    </Link>
  );
}

export default EditButton;