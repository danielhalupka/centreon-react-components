/*
 * Copyright 2005 - 2019 Centreon (https://www.centreon.com/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * For more information : contact@centreon.com
 *
 */

export default [
	{
	  id: 1,
	  status: "running",
		name: "host 1" ,
	  message: "it is running",
	  alias: "run",
	  connection_name: "connection name 1",
	  generate_date: "05/06/2019",
	  duration: "3sec",
	  items_discovered: 5,
		selectedTemplates: [
			"Template 1",
			"Template 2",
			"Template 3",
			"Template 4"
		  ],
	},
	{
	  id: 2,
	  status: "failed",
		name: "host 2" ,
	  message: "it is running",
	  alias: "run",
	  connection_name: "connection name 1",
	  generate_date: "05/06/2019",
	  duration: "3sec",
	  items_discovered: 5,
		selectedTemplates: [
			"Template 1",
			"Template 2",
			"Template 3",
			"Template 4"
		  ],
	},
	{
	  id: 3,
	  status: "finished",
		name: "host 3" ,
	  message: "it is running",
	  alias: "run",
	  connection_name: "connection name 1",
	  generate_date: "05/06/2019",
	  duration: "3sec",
	  items_discovered: 5,
		selectedTemplates: [
			"Template 1",
			"Template 2",
			"Template 3",
			"Template 4"
		  ],
	}
  ];