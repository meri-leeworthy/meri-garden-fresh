import { Post } from "lib/types"
import { Markdown } from "components/Markdown"
import Link from "next/link"
import Image from "next/image"

// TODO: fix leading on heading

export default function Article({ post }: { post: Post }) {
  return (
    <article className="card">
      <Link href={`post/${post.slug}`} className="no-underline">
        <h3 className="inline px-1 py-[2px] text-lg sm:text-[1rem] leading-8 sm:leading-7 bg-purple-300 border text-black border-black border-opacity-40 rounded font-title box-decoration-clone">
          {post.data.title}
        </h3>
      </Link>
      <div className="flex mt-2 sm:h-40">
        <div className="previewtext">
          <Markdown markdown={post.content.slice(0, 600) + "..."} />
        </div>
        {!!post.data.image && (
          <Link href={`post/${post.slug}`} className="">
            <div className="imagecontainer">
              <Image
                src={`/images/${post.data.image}`}
                fill={true}
                alt={post.data.alt}
                className="whitefilter"
              />
            </div>
          </Link>
        )}
      </div>
    </article>
  )
}
