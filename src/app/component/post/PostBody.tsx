import Image from "next/image";

interface PostBodyInterface {
  description: string;
  image: string;
}

const PostBody: React.FC<PostBodyInterface> = ({ description, image }) => {
  return (
    <div>
      <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
      <Image
        src={image}
        alt="post image"
        width={800}
        height={500}
        className="w-full h-auto rounded-lg shadow-xl mt-8"
      />
      <div className="mt-8 text-gray-800">
        <p>{description}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          nobis laudantium assumenda non repellendus quo fuga commodi
          necessitatibus totam dolore, ipsa, dignissimos qui quia ullam
          quisquam, eveniet amet minus voluptate.
        </p>
      </div>
    </div>
  );
};

export default PostBody;
