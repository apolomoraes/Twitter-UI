interface TweetProps {
  user: string
  children: string
  like?: number
}

const tweetStyles = {
  borderRadius: 8
}

export function Tweet(props: TweetProps) {
  return (
    <div className="tweet" style={tweetStyles}>
      <strong>{props.user}</strong>
      <p>{props.children}</p>
      <button>Like {props.like ?? 0}</button>
    </div>
  )
}