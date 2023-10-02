import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const RightSideNav = () => {
  return (
    <div>
      <div className='p-4 space-y-3 mb-6'>
        <h2 className="text-3xl">Find us on</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle>
          Login with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          Login with GitHub
        </button>
      </div>

      <div className='p-4  mb-6'>
        <h2 className="text-3xl mb-4">Login With</h2>
        <a className='p-4 flex gap-3 text-lg items-center border rounded-t-lg' href="">
            <FaFacebook></FaFacebook>
            Facebook
        </a>
        <a className='p-4 flex gap-3 text-lg items-center border-x' href="">
            <FaTwitter></FaTwitter>
            Twitter
        </a>
        <a className='p-4 flex gap-3 text-lg items-center border rounded-b-lg' href="">
            <FaInstagram></FaInstagram>
            Instagram
        </a>
      </div>
    </div>
  );
};

export default RightSideNav;
