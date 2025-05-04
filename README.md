# export-shapes-data
With everything that is going on, you may want to export your data from Shapes. The items in this repository allows you to do this.\
\
This uses only reverse-engineered Shapes frontend API requests and may include some account information, but likely nothing sensitive beyond email and google auth.\
To activate the userscript if it is installed, go to https://shapes.inc/export/data \
The data is in JSON, but you may need a code prettifier to make it human-readable, and the data can get very large if you have enough shapes you created and/or recently used.\
\
\
Exported Data:\
\
Recent Shapes: Public Settings, Last 2048 user memories, User-Specific Settings as `recent` \
Your Shapes: Settings, Last 2048 user memories, Knowledge, Training, User-Specific Settings as `shapes` \
\
User Information as `user` excluding Discord server list and Discord auth information. \
User Authentication Information as `info` \
\
\
Make sure you are logged in before you begin the export. \
These scripts are not responsible for what happens to your data after it is exported. \
\
Despite memories being included, chat history is not included in the export. Only your own shapes and recently used shapes have their data exported, other shapes will be ignored. \
The userscript might attempt to export knowledge and training data for all shapes regardless of if you own them, but only your own shapes will have their private configuration data exported successfully.
