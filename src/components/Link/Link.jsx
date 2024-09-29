

const Link = ({route}) => {
  return (
    <div>
          <li className="mr-10 px-6 hover:bg-green-500 font-bold text-cyan-100 p-2 rounded-lg">
            <a href={route.path}>{route.name}</a>
        </li>
    </div>
    
  );
};

export default Link;
