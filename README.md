# export-shapes-data
With everything that is going on, you may want to export your shapes data. The items in this repo allows you to.\
\
This uses only reverse-engineered Shapes frontend API requests and may include some account information, but likely nothing sensitive beyond email and google auth.\
To activate the userscript if it is installed, go to https://shapes.inc/export/data \
The data is in JSON, but you may need a code prettifier to make it human-readable, and the data can get very large if you have enough shapes you created and/or recently used.\
\
\
Exported Data:\
\
Recent Shapes: Public Settings, Last 2048 user memories, User-Specific Settings as `shapes` \
Your Shapes: Settings, Last 2048 user memories, Knowledge, Training, User-Specific Settings as `recent` \
\
User Information as `user` excluding Discord server list and Discord auth information. \
User Authentication Information as `info`
