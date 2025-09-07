<h1><i class="fa fa-computer"></i>Self-Hosting</h1>

<ol class="breadcrumb">
	<li><i class="fa fa-computer"></i>Self-Hosting</li>
</ol>

<div class="content">
	<p>By "self-hostable", we mean that you can set up the <%= application.name %> software on a web server that you control.  This web server could be your own hardware or it could be a server that you rent from a web hosting provider.</p>

	<div class="attention"><div class="emphasis">How To Self-Host Your <%= application.name %></div></div>

	<h2><i class="fa fa-cloud"></i>Types Of Web Hosting</h2>
	<p>There are various types of web hosting that can be used to deploy your <%= application.name %> instance.  The service that we usually recommend for setting up your <%= application.name %> is called "VPS" for Virtual Private Server.  This service provides the best balance of cost, control and performance for most applications. </p>

	<div class="tip well">
		<h3><span class="icon"><i class="fa fa-lightbulb"></i></span>Tip</h3><p>We Recommend using VPS hosting for self-hosting <%= application.name %>.</p>
	</div>

	<h3><i class="fa fa-computer"></i>VPS Hosting</h3>
	<p>Virtual Private Server (VPS)</b> is a type of web hosting that provides an isolated environment within a physical server, offering more resources and control than shared hosting. It's a cost-effective solution for users who need more power and flexibility than shared hosting but don't require the full resources of a dedicated server. </p>

	<h3><i class="fa fa-share"></i>Shared Hosting</h3>
	<p>An alternative to VPS hosting is called "shared hosting".  Shared hosting has the advantage of a lower cost but offers little control to the user. For example, you can't usually get shell access and don't usually have permission to install additional software packages on the server. The shared hosting option can not be used with <%= application.name %>'s one step Docker installation so if you go with shared hosting, you will need to install the software manually. </p>

	<h3><i class="fa fa-server"></i>Dedicated Server Hosting</h3>
	<p>For the highest level of power and control, you can also choose to use dedicated server hosting.  Using this option, you have hardware dedicated to your use alone, which is why this option is significantly more expensive.  This option is usually only used for high traffic web applications or applications that need a predictably high level of performance. </p>

	<table class="outlined figure">
		<thead>
			<tr class="highlighted">
				<td></td>
				<td>Shared</td>
				<td>VPS</td>
				<td>Dedicated</td>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Cost</td>
				<td>Cheap</td>
				<td>Moderate</td>
				<td>Expensive</td>
			</tr>
			<tr>
				<td>Performance</td>
				<td>Low</td>
				<td>Moderate</td>
				<td>High</td>
			</tr>
			<tr>
				<td>Docker Installation</td>
				<td>No</td>
				<td>Yes</td>
				<td>Yes</td>
			</tr>
			<tr>
				<td>Command Line</td>
				<td>No</td>
				<td>Yes</td>
				<td>Yes</td>
			</tr>
		</tbody>
	</table>

	<h2><i class="fa fa-building"></i>Web Hosting Providers</h2>
	<p>The web hosting providers that most people first think of tend to be large monopolistic companies.  However, there are many great smaller providers that offer a superior product with better service at a lower cost.  We encourage you to set up your own self-hosted <%= application.name %>, using one of these alternative hosting providers rather than using services provided by one of the <a href="#hosting-blacklist">large, monopolistic and ethically questionable companies.</a> </p>

	<div class="tip well">
		<h3><span class="icon"><i class="fa fa-lightbulb"></i></span>Tip</h3><p>Avoid monopolistic and unethical hosting companies.</p>
	</div>
</div>