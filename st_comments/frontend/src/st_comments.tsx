import React, { useEffect, useState } from "react";
import {
  ComponentProps,
  Streamlit,
  withStreamlitConnection,
} from "streamlit-component-lib";
import { Card, CardContent, CardActions, IconButton, Typography  } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import { Helmet } from 'react-helmet';

interface Comment {
  id: number;
  user: string;
  date: string;
  text: string;
}

interface PythonStyle {
  border?: string;
  border_radius?: string;
  padding?: string;
  margin?: string;
}


const CommentComponent = (props: ComponentProps) => {
  const [comments, setComments] = useState<Comment[]>(props.args.comments || []);
  const customCss = props.args.custom_css || "";
  const maxHeight  = props.args.max_height;
  const minHeight  = props.args.min_height;
  const delete_keyword = props.args.delete_keyword;
  const custom_font_awesome_url = props.args.custom_font_awesome_url;
  const delete_user = props.args.delete_user;


  const handleDelete = (id: number) => {
    const newComments = comments.filter((comment: Comment) => comment.id !== id);
    setComments(newComments);
    Streamlit.setComponentValue(newComments);
  };

  useEffect(() => {
    Streamlit.setFrameHeight();
  }, [comments]);

  return (
    <>
    <Helmet>
        <script
          src={custom_font_awesome_url}
          crossOrigin="anonymous"
          id="font-awesome-icons"
        />
      </Helmet>
    <div style={{padding: '5px', maxHeight: maxHeight, minHeight: minHeight, overflow: 'auto' }}>
      <style dangerouslySetInnerHTML={{__html: customCss}} />
      {comments.map((comment: Comment) => (
      <Card key={comment.id} style={{position: 'relative'}}>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {comment.user} ({new Date(comment.date).toISOString().split('T')[0]})
          </Typography>
          <Typography variant="body1" component="p">
            {comment.text}
          </Typography>
        </CardContent>
        {(delete_user === "all" || delete_user === comment.user) ? ( // Only show delete button if user has permission
          <CardActions style={{ paddingTop: 0, position: 'absolute', right: '1px', top: '1px', padding: "2px" }}>
            <IconButton aria-label="delete" color="secondary" size="small" onClick={() => handleDelete(comment.id)}>
              <DeleteIcon />
              <span dangerouslySetInnerHTML={{ __html: delete_keyword }}></span>
            </IconButton>
          </CardActions>
        ) : ( // Dummy CardActions with no content to maintain card height
          <CardActions style={{ visibility: 'hidden', paddingTop: 0, position: 'absolute', right: '1px', top: '1px', padding: "2px" }}>
            <IconButton aria-label="delete" color="secondary" size="small">
              <DeleteIcon style={{ visibility: 'hidden' }} />
            </IconButton>
          </CardActions>
        )}
      </Card>
    ))}
 
    </div>
    </>
  );
};
  
export default withStreamlitConnection(CommentComponent);
